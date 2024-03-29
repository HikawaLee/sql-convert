export default [
    {
            "desc": "增加字段",
            "layout": [
                {
                    "type": "input",
                    "title": "数据库名",
                    "value": {
                        "type": String,
                        "default": "",
                    },
                    "rules": [], //校验规则, 待定
                },
                {
                    "type": "input",
                    "title": "表名",
                    "value": {
                        "type": String,
                        "default": "",
                    },
                    "rules": [],
                },
                {
                    "type": "input",
                    "title": "字段名",
                    "value": {
                        "type": String,
                        "default": "",
                    },
                },
                {
                    "type": "input",
                    "title": "字段长度",
                    "value": {
                        "type": String,
                        "default": "",
                    },

                },
                {
                    "type": "select",
                    "title": "字段类型",
                    "placeholder": "",
                    "value": {
                        "type": String,
                        "default": "String(Java兼容)",
                    },
                    "options": [
                        "String(Java兼容)",
                        "Date(Java兼容)",
                        "Number(Java兼容)",
                        "Byte[](Java兼容)",
                    ],
                },
                {
                    "type": "checkbox",
                    "title": "目标数据库",
                    "value": {
                        "type": String,
                        "default": "达梦",
                    },
                    "options":
                        ["达梦",
                        "TD SQL",
                        ],
                },
                {
                    "type": "radio",
                    "title": "是否大表",
                    "value": {
                        "type": String,
                        "default": "否",
                    },
                    "options": ["是", "否"],
                },
                {
                    "type": "textarea",
                    "title": "目标SQL输出",
                }
            ],
    },
    {
        "desc": "减少字段",
        "layout": [
            {
                "type": "input",
                "title": "数据库名",
                "value": {
                    "type": String,
                    "default": "",
                },
                "rules": [], //校验规则, 待定
            },
            {
                "type": "input",
                "title": "表名",
                "value": {
                    "type": String,
                    "default": "",
                },
                "rules": [],
            },
            {
                "type": "input",
                "title": "字段名",
                "value": {
                    "type": String,
                    "default": "",
                },
            },
            {
                "type": "input",
                "title": "字段长度",
                "value": {
                    "type": String,
                    "default": "",
                },

            },
            {
                "type": "select",
                "title": "字段类型",
                "placeholder": "",
                "value": {
                    "type": String,
                    "default": "String(Java兼容)",
                },
                "options": [
                    "String(Java兼容)",
                    "Date(Java兼容)",
                    "Number(Java兼容)",
                    "Byte[](Java兼容)",
                ],
            },
            {
                "type": "checkbox",
                "title": "目标数据库",
                "value": {
                    "type": String,
                    "default": "达梦",
                },
                "options":
                    ["达梦",
                        "TD SQL",
                    ],
            },
            {
                "type": "radio",
                "title": "是否大表",
                "value": {
                    "type": String,
                    "default": "否",
                },
                "options": ["是", "否"],
            },
        ],
    },



]





