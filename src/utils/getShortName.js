export default function getShortName(name) {
    const [firstName, middleName, lastName] = name.split(" ");
    let shortName = firstName[0];
    if (lastName) shortName += lastName[0];
    else if (middleName) shortName += middleName[0];
    return shortName;
}