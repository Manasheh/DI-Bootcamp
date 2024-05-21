function validateUnionType(value: any, allowedTypes: string[]): boolean {
    return allowedTypes.some(type => {
        switch (type) {
            case "null":
                return value === null;
            case "array":
                return Array.isArray(value);
            case "object":
                return typeof value === "object" && value !== null && !Array.isArray(value);
            default:
                return typeof value === type;
        }
    });
}

const num = 42;
console.log(validateUnionType(num, ["string", "number"])); 

const str = "Hello world";
console.log(validateUnionType(str, ["boolean", "string"])); 

const bool = false;
console.log(validateUnionType(bool, ["boolean", "object"])); 

const obj = { key: "value" };
console.log(validateUnionType(obj, ["array", "object"])); 

const arr = [1, 2, 3];
console.log(validateUnionType(arr, ["number", "array"]));

const nil = null;
console.log(validateUnionType(nil, ["null", "undefined"])); 
