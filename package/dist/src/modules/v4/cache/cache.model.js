export var TTLPresets;
(function (TTLPresets) {
    TTLPresets[TTLPresets["MIN_1"] = 60] = "MIN_1";
    TTLPresets[TTLPresets["MIN_5"] = 300] = "MIN_5";
    TTLPresets[TTLPresets["MIN_10"] = 600] = "MIN_10";
    TTLPresets[TTLPresets["MIN_30"] = 1800] = "MIN_30";
    TTLPresets[TTLPresets["HOUR_1"] = 3600] = "HOUR_1";
    TTLPresets[TTLPresets["HOUR_4"] = 14400] = "HOUR_4";
    TTLPresets[TTLPresets["HOUR_8"] = 28800] = "HOUR_8";
    TTLPresets[TTLPresets["HOUR_12"] = 43200] = "HOUR_12";
    TTLPresets[TTLPresets["DAY_1"] = 86400] = "DAY_1";
    TTLPresets[TTLPresets["WEEK_1"] = 604800] = "WEEK_1";
    TTLPresets[TTLPresets["MONTH_1"] = 2592000] = "MONTH_1";
})(TTLPresets || (TTLPresets = {}));
