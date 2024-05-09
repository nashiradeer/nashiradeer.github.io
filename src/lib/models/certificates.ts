import type { IItem } from "$lib/types";
import { assets } from "$app/paths";
import { CSHARP, PYTHON, QT, UNITY } from "./badges";

export let CERTIFICATES: IItem[] = [
    {
        id: "system-programmer",
        title: "System Programmer",
        description: "06/2022-09/2022 | 200 hours",
        link: `${assets}/certificates/system-programmer.pdf`,
        image: `${assets}/certificates/senac.svg`,
        enableBorder: false,
        badges: [
            QT, PYTHON
        ]
    },
    {
        id: "game-developer",
        title: "Game Developer",
        description: "07/2021-10/2021 | 240 hours",
        link: `${assets}/certificates/game-developer.pdf`,
        image: `${assets}/certificates/senac.svg`,
        enableBorder: false,
        badges: [
            UNITY, CSHARP
        ]
    }
];