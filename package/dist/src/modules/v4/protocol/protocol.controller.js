import { AuthorizationHeadersDto, BackOfficeGuard } from "@/guards/BackOffice.guard";
import Elysia, { t } from "elysia";
import { CreateProtocolDto, GetProtocolsQueryDto, NotionWebhookAddProtocolDto, ProtocolIdDto, ProtocolResourceDto, UpdateProtocolDto, } from "./protocol.model";
import { ProtocolService } from "./protocol.service";
// ─── Protocols Controller ────────────────────────────────────────────────────
export const ProtocolController = new Elysia({ prefix: "/protocols", detail: { tags: ["Protocols"] } })
    // ─── Get Many Protocols ──────────────────────────────────────────────
    .get("/", async ({ query }) => await ProtocolService.findMany(query), {
    query: GetProtocolsQueryDto,
    response: t.Array(ProtocolResourceDto),
    detail: { description: "List protocols supported and integrated by Merkl." },
})
    // ─── Count Protocols ─────────────────────────────────────────────────
    .get("/count", async ({ query }) => await ProtocolService.countMany(query), {
    query: GetProtocolsQueryDto,
    detail: { description: "Get the number of protocols corresponding to the query." },
})
    // ─── Get A Protocol By Its Id Or Name ────────────────────────────────
    .get("/:id", async ({ params }) => {
    const fromId = await ProtocolService.findUnique(params.id);
    if (fromId)
        return fromId;
    return (await ProtocolService.findMany({ name: params.id }))?.[0];
}, { detail: { hide: true } })
    // ─── Update A Protocol ───────────────────────────────────────────────
    .patch("/:id", async ({ params, body }) => await ProtocolService.update(params.id, body), {
    params: ProtocolIdDto,
    body: UpdateProtocolDto,
    headers: AuthorizationHeadersDto,
    beforeHandle: BackOfficeGuard,
    detail: { hide: true },
})
    // ─── Create A Protocol ───────────────────────────────────────────────
    .post("/", async ({ body }) => await ProtocolService.create(body), {
    body: CreateProtocolDto,
    headers: AuthorizationHeadersDto,
    beforeHandle: BackOfficeGuard,
    detail: { hide: true },
})
    .group("/webhooks", app => app.post("/notion", async ({ body }) => ProtocolService.upsert({
    id: body.data.properties.id.title[0].text.content,
    description: body.data.properties.description.rich_text[0].text.content,
    icon: "file" in body.data.properties.icon.files[0]
        ? body.data.properties.icon.files[0].file.url
        : body.data.properties.icon.files[0].external.url,
    name: body.data.properties.name.rich_text[0].text.content,
    tags: body.data.properties.tags.rich_text[0]?.text.content.split(","),
    url: body.data.properties.url.url,
}), {
    headers: AuthorizationHeadersDto,
    beforeHandle: BackOfficeGuard,
    body: NotionWebhookAddProtocolDto,
}));
