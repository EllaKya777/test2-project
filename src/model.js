import image from './assets/image.jpg';
import {TitleBlock, TextBlock, ColumnsBlock, ImageBlock} from './classes/blocks.js';
const text = `Cras mauris nibh, tristique vel justo et, scelerisque accumsan tortor. Integer eu neque ut urna malesuada mollis euismod suscipit urna. Proin vel nisi non augue elementum laoreet. Nam eu lorem mauris. Sed tempus, arcu at consequat pretium, magna erat mattis ante, quis pulvinar elit lorem vitae turpis. Ut volutpat diam ex, non commodo nunc faucibus vitae. Suspendisse sit amet pharetra lorem. Mauris porta euismod ipsum at tincidunt. Nam volutpat laoreet diam et fringilla. Sed sit amet elit lectus. Nulla dignissim, orci sed pretium vulputate, dui diam tincidunt lacus, vitae dignissim ex elit vitae lorem. Duis vitae consequat dolor. In ac pharetra dui.

`;
export const model = [
    new TitleBlock('Hello World!', {
        tag: 'h2',
       // styles: background: 'linear-gradient(to right, #bdc3c7, #2c3e50)', color: '#fff',
       styles: {
           background: 'linear-gradient(to right, #bdc3c7, #2c3e50)',
           color: '#fff',
           padding: '1.5rem',
           'margin-bottom': '2rem',
           'text-align': 'center'
       }
   /* {type: 'title', value: "Hello World from JS!", options: {
        tag: 'h2',
       // styles: background: 'linear-gradient(to right, #bdc3c7, #2c3e50)', color: '#fff',
       styles: {
           background: 'linear-gradient(to right, #bdc3c7, #2c3e50)',
           color: '#fff',
           padding: '1.5rem',
           'text-align': 'center'
       }*/
    }),
    new TextBlock (text, {
        styles: {
            background: 'rgb(232,232,232)',
            padding: '1rem',
            color: '74, 107, 117',
            'font-weight': 'bold'

        }
    }),
    new ImageBlock (image, {
        styles: {
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center'
        },
        imageStyles: {
            width: '100%',
            height: 'auto'
        },
        alt: 'Picture'
    }),

    new ColumnsBlock([
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum scelerisque ut nunc ac ornare. Praesent ac metus convallis, lacinia enim blandit, sagittis libero. Ut ut enim vitae leo blandit ultricies sed ullamcorper eros. Suspendisse potenti. Morbi ex dui, lacinia non pellentesque dapibus, condimentum vel mauris. Sed ornare ligula ante, eget euismod massa blandit ac. Maecenas vel volutpat eros. In volutpat blandit est, hendrerit fermentum lacus feugiat vitae. Fusce et vulputate erat, vitae facilisis lectus. Phasellus rutrum euismod suscipit.',
    'Donec eros purus, lobortis sit amet congue a, iaculis sed dui. Sed vitae leo non metus fringilla ullamcorper sodales vel mauris. Nulla facilisi. Nullam vestibulum iaculis magna vel cursus. Aliquam erat volutpat. Integer efficitur metus sed arcu tincidunt, nec elementum diam accumsan. Nam a semper neque. Nunc efficitur elit ac neque semper, non pretium felis tempor. Etiam ultricies lacus non odio sollicitudin, et tempor nibh semper. Curabitur interdum volutpat sodales. Duis bibendum ante dapibus velit bibendum, quis lacinia nunc finibus.',
    'Sed tempus elit ut felis ultricies pretium. Suspendisse et varius elit. Quisque vel dolor mi. Nullam porttitor lorem arcu, in dictum nunc pharetra quis. Morbi vel ante turpis. Aenean congue ut ante a ultrices. Pellentesque convallis, est vel scelerisque lobortis, lacus metus consequat ex, nec ultricies risus nisi eget metus. Nunc sollicitudin, lorem et sodales cursus, nibh felis facilisis quam, nec pulvinar nulla lectus eu orci. Nam viverra laoreet est a laoreet.'
    ], {
        styles: {
            background: 'rgb(235, 235, 224)',
            padding: '2rem',
            color: '74, 107, 117',
            'font-weight': 'bold'
        }
    })
   
]


