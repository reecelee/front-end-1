import './Filter.css'

function Filter() {
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container">
                <span className="field">NBA</span>
                <span className="field">NFL</span>
                <span className="field">MLB</span>
                <span className="field">NHL</span>
                <span className="field">WNBA</span>
                <span className="field">More...</span>
            </div>
        </nav>
    )
}

export default Filter