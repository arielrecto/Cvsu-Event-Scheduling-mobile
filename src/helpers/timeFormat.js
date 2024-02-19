const timeFormat = (time) => {
    const formattedTime = new Date(`2000-01-01 ${time}`).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });


    return formattedTime;
}


export default timeFormat