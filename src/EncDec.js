import styles from './App.module.scss';
import encodedString from './encodedString.json';


const EncDec = () => {
    console.log(encodedString)
    const encode = input => [...input]
    .map((x, i) => [x.charCodeAt(0), i])
    .sort()
    .flatMap(x => x)
    .join('.')
    .match(/./g)
    .flatMap((x, i) => new Array(x === '.' ? 1 : 2 + x * 2).fill((1 + i) % 2))
    .join('')
    .replace(/(([01])\2*)/g, x => `${(+x ? '.' : '-')}${x.length}`);
    
    const decode = input => {
        return input
        .replace(/([.-])(\d+)/g, (_, sign, length) => (sign === "." ? "1" : "0").repeat(parseInt(length, 10)))
        .split('')
        .map(char => parseInt(char, 10))
        .reduce((acc, val) => (val !== acc[acc.length - 1]?.[0] ? acc.push([val]) : acc[acc.length - 1].push(val), acc), [])
        .flatMap((a, i) => a.length === 1 ? new Array(1).fill(".") : a.length === 2 ? new Array(1).fill(0) : new Array(1).fill((a.length -2) / 2))
        .join('')
        .match(/\d+\.\d+/g)
        .map(pair => pair.split('.').map(Number))
        .sort((a, b) => a[1] - b[1])
        .map(pair => pair[0])
        .map(code => String.fromCharCode(code))
        .join('');
    };
    
    return (
        <div className={styles.modal_container}>
            <h1 className={styles.modal_title}>Choose encryption string</h1>
            <h2>Here is encoded string:</h2>
            <p className={styles.encoded_string}>{encodedString.str}</p>
            <button onClick={() => {
                let encoded = encode("Hello Dear Sups");
                console.log(encoded);
                let decoded = decode(encodedString.str);
                console.log(decoded);
            }}>Decode</button>
        </div>
    );
};

export default EncDec;