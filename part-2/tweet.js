function Tweet ({username, name, date, message}){
    return (
        <div class="tweet"> 
            <span>{name}</span>
            <span class="date">{date}</span>
            <span class="username">{username}</span>
            <span>{message}</span>
        </div>
    );
}