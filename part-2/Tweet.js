
function Tweet(props) {
    return (
        <ul class='tweet'>
            <li>Username: {props.user}</li>
            <li>Name : {props.name}</li>
            <li>Date: {props.date}</li>
            <li>Message: {props.message}</li>
        </ul>
    )
}