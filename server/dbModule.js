const jsonFile = require('jsonfile');

exports.getAll = async() => {
    const fileData = await jsonFile.readFile('./db.json');
    return fileData;
}

exports.addCat = async(cat) => {

    try {
        const currentFileData = await jsonFile.readFile('./db.json');
        currentFileData.push(cat);
        const updateFile = await jsonFile.writeFile('./db.json', currentFileData)
        return "updated!";

    } catch (err) {
        console.log(err);
    }
}
