import "./plain-bem.css";

function CssBemPage() {
    return (
        <div className="plain-bem-scope container">
            <div className="card">
                <div className="card__header">
                    <h1 className="card__title">Example card</h1>
                </div>
                <div className="card__body">
                    <p className="card__paragraph">
                        Accusantium at commodi et fuga id illo inventore itaque laboriosam minima molestiae molestias nostrum, numquam pariatur placeat porro possimus quam quo quos repellat sunt suscipit totam voluptate voluptatibus! Animi architecto magni nam qui quo.
                    </p>
                    <p className="card__paragraph">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque harum laboriosam placeat rem ullam. Consequuntur earum molestiae optio perspiciatis rem.
                    </p>
                </div>
                <div className="card__footer">
                    <button className="button button--secondary" type="button">Cancel</button>
                    <button className="button button--primary" type="button">Confirm</button>
                </div>
            </div>
        </div>
    );
}

export default CssBemPage;
