import jacques from "../images/jacques-cousteau.jpg";

function Main() {
  return (
    <main className="content">
        <section className="profile">
            <img className="profile__avatar" src={jacques} alt="jacques cousteau" />
            <div className="profile__avatar">
                <img src={jacques} alt="profile picture" className="profile__photo"/>
                <button type="button" aria-label="edit-avatar" className="profile__photo_edit"></button>
            </div>
            <div className="profile__info">
                <div className="profile__container">
                    <h1 className="profile__text_name">Jacques Cousteau</h1>
                    <button className="profile__edit-button"></button>
                </div>
                <h2 className="profile__text_desc">Explorer</h2>
            </div>
            <button className="profile__add-button">
            </button>
        </section>
        <section className="elements">
            <ul className="elements__list"></ul>
        </section>
    </main>
  );
}

export default Main;
