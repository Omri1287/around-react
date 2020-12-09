import './App.css';
import Header from './Header';

function App() {
  return (
    <div className="page">
        <Header/ >
        <main className="content">
            <section className="profile">
                <img className="profile__avatar" src="./images/jacques-cousteau.jpg" alt="jacques cousteau" />
                <div className="profile__avatar">
                    <img src="./images/jacques-cousteau.jpg" alt="profile picture" className="profile__photo"/>
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
        <footer className="footer"> 
            <div className="footer__container">
                <p className="footer__text">© 2020 Around The U.S.</p>
            </div>
        </footer>
        <div className="modal modal_type_edit-avatar">
            <div className="modal__container">
              <button className="modal__close-btn"></button>
              <form className="modal__form modal__form_type_edit-avatar modal_large_size">
                <h2 className="modal__title">Change Profile Picture</h2>
                <input id="avatar-URL" type="url" value="" placeholder="enter avatar link here" className="modal__input modal__input_avatar-URL" name="avatarURL" required minlength="2"/>
                <span id="avatar-URL-error" className="modal__error modal__error_visible"></span>
                <button type="submit" className="modal__save modal__save_disabled">Save</button>
              </form>
            </div>
        </div>
        <div className="modal modal_type_edit-profile">
            <div className="modal__container">
                <button className="modal__close-btn modal__close-btn_type_edit-profile"></button>
                <form action="#" className="modal__form modal__form_type_edit-profile">
                    <h2 className="modal__title modal__title_type_edit-profile">Edit profile</h2>
                    <input id="profile-name" type="text" placeholder="title" className="modal__input modal__input_name" value="" name="title" required maxlength="40" minlength="2" />
                    <span id="profile-name-error" className="modal__error"></span>
                    <input id="profile-desc" type="text" placeholder="description" className="modal__input modal__input_desc" value="" name="desc" required maxlength="200" minlength="2" /> 
                    <span id="profile-desc-error" className="modal__error"></span>

                    <button className="modal__save modal__save_type_edit-profile modal__save_disabled">Save</button>
                </form>
            </div>
        </div>
        <div className="modal modal_type_add-image">
            <div className="modal__container">
                <button className="modal__close-btn modal__close-btn_type_add-image"></button>
                <form action="#" className="modal__form modal__form_type_add-image">
                    <h2 className="modal__title modal__title_type_add-image">New Place</h2>
                    <input id="card-name" type="text" placeholder="Name" className="modal__input modal__input_image-name"  name="name" required maxlength="30" minlength="2" />
                    <span id="card-name-error" className="modal__error"></span>

                    <input id="card-link" type="url" placeholder="image-link" className="modal__input modal__input_url" name="link" required /> 
                    <span id="card-link-error"className="modal__error"></span>

                    <button type="submit" className="modal__save modal__save_type_add-image modal__save_disabled">Create</button>
                </form>
            </div>
        </div>
        <div className="modal modal_type_delete">
            <div className="modal__container">
                <button className="modal__close-btn modal__close-btn_type_delete"></button>
                <form id="deleteCard" name="delete" className="modal__form modal__form_type_delete">
                <h2 className="modal__title">Are You Sure?</h2>
                <button type="submit" aria-label="confirm-card-delete" className="modal__save">Yes</button>
                </form>
          </div>
        </div>
        <div className="modal modal_type_image">
            <div className="modal__container">
                <button className="modal__close-btn modal__close-btn_type_image"></button>
                <figure className="modal__new-container">
                    <img className="modal__large-image" id="img-large" src="#" alt="#" />
                    <figcaption className="modal__caption"></figcaption>
                </figure>
            </div>
        </div>
        <template className="card-template">
            <li className="elements__item">
                    <div className="elements__image">
                        <button className="elements__delete"></button>
                    </div>
    
                    <div id="title-container" className="elements__container">
                        <h2 className="elements__title"></h2>
                        <div className="elements__heart-container">
                            <button className="elements__heart"></button>
                            <p className="elements__heart-count"></p>
                        </div>
                    </div>
            </li>
        </template>
    </div>  
  );
}

export default App;
