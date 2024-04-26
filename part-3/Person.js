const MAX_NAME_LENGTH = 6;

function Person({name, age, hobbies}){
    const canVote = age >= 18 ? "Please go vote!" : "you must be 18!"

    const hobbyList = hobbies.map(h => <li>{h}</li>);

    return (
        <div>
            <p>Learn some information about this person.</p>
            <ul>
                <li>Name: {name.slice(0, MAX_NAME_LENGTH)}</li>
                <li>Age: {age}</li>
            </ul>
            <h3>Hobbies:</h3>
            <ul>
                {hobbyList}
            </ul>
            <h3>{canVote}</h3>
        </div>
    )
}