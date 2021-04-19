import React from "react"

export default function Contact() {
  return (
    <div>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want to get in Touch </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
              explicabo et natus.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
              sunt.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
              dolore earum sit quae deleniti ipsa quibusdam facere expedita
              voluptatum tempora!
            </p>
          </article>
          <article>
            <form className="form conact-form">
              <div className="form-row">
                <lable htmlFor="name">your name</lable>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <lable htmlFor="email">your email</lable>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <lable htmlFor="message">message</lable>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                Submit
              </button>
            </form>
          </article>
        </section>
      </main>
    </div>
  )
}
