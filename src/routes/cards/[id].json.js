import path from "path";
import fs from "fs";
import grayMatter from "gray-matter";
import {modal} from '../../stores';

const getCardData = (id) => {
    try {
        const data = fs.readFileSync(
            path.resolve(`static/cardDescription/`, id + '.md'),
            "utf-8"
        );
        return grayMatter(data).data;
    } catch (e) {
        console.log(e);
        return [];
    }
};

const fetchData = async (id) => {
    let data = {};
    data = getCardData(id);
    return data;
}

export async function get(req, res, _) {
    const {id} = req.params
    res.writeHead(200, {
        "Content-Type": "application/json",
    });
    const response = await fetchData(id);
    res.end(JSON.stringify(response));
}