/*
    Developer: Sterling Michel
    emailAddress: smichel@5searches.com
    CreatedDate: Oct 7th, 2020
    License: MIT
*/

import { Parse, ParseData } from "../../dtd/parse";

export default class ParseVersionTwo {
    public rules: string;

    constructor() {
        this.rules = "";
    }

    public run(inData: Parse): ParseData {
        // split data base on digit
        const splitData = inData.data.trim().split(/(0000)|(000)/ig);

        // remove the undefined value
        const cleanData = splitData.filter((item) => {
            return (item !== undefined) && (item !== '0000' && item !== '000');
        });

        let result: ParseData;

        if ('data' in inData) {
            result = {
                statusCode: 200,
                data: {
                    firstName: cleanData[0],
                    lastName: cleanData[1],
                    clientId: cleanData[2].substr(0, 3) + "-" + cleanData[2].substr(3)
                }
            }
        } else {
            result = {
                statusCode: 402,
                error: "Invalid data format provide"
            }
        }

        return result;
    }
}