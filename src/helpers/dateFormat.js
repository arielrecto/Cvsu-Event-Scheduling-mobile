const dateFormat = (date) => {
    const formattedDate = new Date(date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })


    return formattedDate;
}


export default dateFormat