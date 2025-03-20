


let Input = () =>
{
    return (
        <>
        
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <input type="text"  placeholder="Enter Your To Do"/>
                    </div>
                    <div className="col-md-4">
                        <input type="date"/>
                    </div>
                    <div className="col-md-2">
                        <button className="btn btn-success">Add</button>
                    </div>
                </div>
            </div>
        
        </>
    )
}

export default Input;