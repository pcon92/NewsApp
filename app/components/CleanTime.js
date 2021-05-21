export default function CleanTime(publishedAt) {
    let splitDateTime = publishedAt.split('T');
    let publishedDate = splitDateTime[0];
    let publishedTime = splitDateTime[1].slice(0, splitDateTime[1].length - 1) + " UTC";
    return `Published at ${publishedTime} on ${publishedDate}`;
};

// to display date in user friendly way
