import path from "path";
import fs from "fs";
import grayMatter from "gray-matter";
import {preLoadingDir} from '../config';


const getTypeData = (dir) => {
    try {
        return fs.readdirSync(`static/${dir}/`).map((fileName) => {
            const data = fs.readFileSync(
                path.resolve(`static/${dir}/`, fileName),
                "utf-8"
            );
            return grayMatter(data).data;
        });
    } catch (e) {
        console.log(e);
        return [];
    }
};

const fetchData = () => {
    let data = {};
    preLoadingDir.map(dir => {
        data[dir] = getTypeData(dir);
    })
    return data;
}

export function get(_, res) {
    res.writeHead(200, {
        "Content-Type": "application/json",
    });
    let response = [];
    console.log("Predir length", preLoadingDir.length);
    if (preLoadingDir.length > 0) {
        response = fetchData();
    }
    res.end(JSON.stringify(response));
}