interface UserCardProps {
    name?: string;
    age: number;
}

const UserCard = ({name = "Menashe", age = 30}: UserCardProps) => {
    return (
        <div>
            <h2>{`Hello, ${name}, you are ${age} years old`}</h2>
        </div>
    )
}

export default UserCard;