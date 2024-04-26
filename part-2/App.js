function App(){
    return (
        <div>
            <Tweet name="Dustin" username="Dusty" date={new Date().toDateString()} message="React Tweets and stuff"/>
            <Tweet name="Kirsten" username="Beef" date={new Date().toDateString()} message="Stuff and things and code"/>
            <Tweet name="Denali" username="Nollie" date={new Date().toDateString()} message="Many more things and stuff"/>
        </div>
    );
}