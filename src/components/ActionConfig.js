const actions =  {
    addCol: {
        "desc": "增加字段",
        "layout": [
            {
                "type": "input",
                "title": "数据库名",
                "defaultValue": {
                    "type": String,
                    "values": "",
                },
                "rules": [], //校验规则, 待定
            },
            {
                "type": "input",
                "title": "表名",
                "defaultValue": {
                    "type": String,
                    "values": "",
                },
                "rules": [],
            },
            {
                "type": "input",
                "title": "字段名",
                "defaultValue": {
                    "type": String,
                    "values": "",
                },
                "convertor": {}, //字段扩展函数, 用于完成对字段名加前缀后缀等功能...
            },
            {
                "type": "input",
                "title": "字段长度",
                "defaultValue": {
                    "type": String,
                    "values": "",
                },

            },
            {
                "type": "select",
                "title": "字段类型",
                "placeholder": "String(Java兼容)",
                "defaultValue": {
                    "type": Array,
                    "values": ["Date(Java兼容)",
                        "Number(Java兼容)",
                        "Byte[](Java兼容)",
                    ],
                },
            },
            {
                "type": "checkbox",
                "title": "目标数据库",
                "defaultValue": {
                    "type": Array,
                    "values":
                        ["达梦",
                            "TDSQL",],
                },
            },
            {
                "type": "radio",
                "title": "是否大表",
                "defaultValue": {
                    "type": String,
                    "values": [
                        "否",
                        "是",
                    ],
                },
            },
            {
                "type": "textarea",
                "title": "目标SQL输出",
            }
        ],
    },

    subCol: {
        "desc": "减少字段",
        "layout": [
            {
                "type": "input",
                "title": "数据库名",
                "defaultValue": {
                    "type": String,
                    "values": "",
                },
                "rules": [], //校验规则, 待定
            },
            {
                "type": "input",
                "title": "表名",
                "defaultValue": {
                    "type": String,
                    "values": "",
                },
                "rules": [],
            },
            {
                "type": "input",
                "title": "字段名",
                "defaultValue": {
                    "type": String,
                    "values": "",
                },
                "convertor": {}, //字段扩展函数, 用于完成对字段名加前缀后缀等功能...
            },
            {
                "type": "input",
                "title": "字段长度",
                "defaultValue": {
                    "type": String,
                    "values": "",
                },

            },
            {
                "type": "select",
                "title": "字段类型",
                "placeholder": "String(Java兼容)",
                "defaultValue": {
                    "type": Array,
                    "values": ["Date(Java兼容)",
                        "Number(Java兼容)",
                        "Byte[](Java兼容)",
                    ],
                },
            },
            {
                "type": "checkbox",
                "title": "目标数据库",
                "defaultValue": {
                    "type": Array,
                    "values":
                        ["达梦",
                            "TDSQL",],
                },
            },
            {
                "type": "radio",
                "title": "是否大表",
                "defaultValue": {
                    "type": String,
                    "values": [
                        "否",
                        "是",
                    ],
                },
            },
            {
                "type": "textarea",
                "title": "目标SQL输出",
            }
        ],
    }
}

let indexToAction = new Map()
indexToAction.set("增加字段", actions.addCol)
indexToAction.set("减少字段", actions.subCol)

export default indexToAction;