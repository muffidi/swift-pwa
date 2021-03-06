/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
export const StripHtmlTags = (str = '') => {
    if ((str === null) || (str === '')) return false;
    str = str.toString();
    return str.replace(/<[^>]*>/g, '');
};

// eslint-disable-next-line max-len
export const capitalizeEachWord = (str = '') => str.toLowerCase().split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
