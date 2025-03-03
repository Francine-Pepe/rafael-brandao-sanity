import { title } from "process";

export default {
    name: "translation",
    title: "Translation",
    type: "document",
    fields: [
        {
            name: "key",
            title: "Translation Key",
            type: "string",
            description: "A unique key for the translation"
       },
       {
        name: "pt",
        title: "Portuguese",
        type: "string",
        description: "Portuguese translation"
       },
       {
        name: "en",
        title: "English",
        type: "string",
        description: "English translation"
       },
       {
        name: "de",
        title: "German",
        type: "string",
        description: "German translation"   
       }
    ]
}