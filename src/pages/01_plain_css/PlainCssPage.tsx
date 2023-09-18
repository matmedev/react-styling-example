import "./plain.css";

function PlainCssPage() {
    return (
        <div className="container">
            <div className="card">
                <div className="header">
                    <h1 className="title">Example card</h1>
                </div>
                <div className="body">
                    <p className="paragraph">
                        Accusantium at commodi et fuga id illo inventore itaque laboriosam minima molestiae molestias nostrum, numquam pariatur placeat porro possimus quam quo quos repellat sunt suscipit totam voluptate voluptatibus! Animi architecto magni nam qui quo.
                    </p>
                    <p className="paragraph">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque harum laboriosam placeat rem ullam. Consequuntur earum molestiae optio perspiciatis rem.
                    </p>
                </div>
                <div className="footer">
                    <button className="button-cancel" type="button">Cancel</button>
                    <button className="button-confirm" type="button">Confirm</button>
                </div>
            </div>
        </div>
    )
}

export default PlainCssPage;
