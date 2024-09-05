import React from 'react'

const App = () => {
  return (
    <div>

    <div className="container">



        <div className="row">
            <div className="col-md-3 "></div>
            <div id="maincol" className="col-md-6">
                <nav className="navbar bg-body-tertiary" data-bs-theme="dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Merge Fruit Replica</a>
                    </div>
                </nav>
                <div id="canvasbox"></div>
            </div>

            <div className="col-md-3 "></div>

        </div>
    </div>

    <script defer src="./fruit.js"></script>
    <script defer src="./ground.js"></script>
    <script defer src="./script.js"></script>
</div>
  )
}

export default App
