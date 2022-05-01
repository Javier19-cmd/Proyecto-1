const Header = (parent, props) => {
    console.log('Hello from header')
    const header = document.createElement('h1');
    header.append(props.title)
    parent.appendChild(header);
}

export default Header