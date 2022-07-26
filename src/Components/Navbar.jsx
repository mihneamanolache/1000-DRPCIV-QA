import React from 'react'

function Navbar() {
    return <nav className="navbar bg-light row justify-content-center">
            <h1 className="text-center">1000 de Intrebari DRPCIV</h1>
            <div class="input-group w-50">
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                <button class="btn btn btn-outline-secondary" type="button">Cautare</button>
            </div>
        </nav>
}

export default Navbar