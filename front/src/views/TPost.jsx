import React from 'react';
import '../css/Post.css';

export default function TPost() {
    return (
        <div className="contRend">
      <span className="formTitle">Register new transaction</span>
      <form /* onSubmit={submit} */>
        <div className="contForm2">
          {" "}
          {/* Dentro de las sombras */}
            <div className="row">
              <label>Type: </label>
              <div className="inputCheck">
                <input
                  type="text"
                  name="type"
                  /* value={user.first_name} */
                  /* onChange={handleInputChange} */
                  placeholder="Nombre"
                />
              </div>
            </div>

            <div className="row">
              <label>Amount: $</label>
              <div className="separator"></div>
              <div className="inputCheck">
                <input
                  type="text"
                  name="amount"
/*                   value={user.last_name}
                  onChange={handleInputChange} */
                  placeholder="Only numbers or points"
                />
              </div>
            </div>

            <div className="row">
              <label>Item: </label>
              <div className="inputCheck">
                <input
                  type="text"
                  name="item"
/*                   value={user.username}
                  onChange={handleInputChange} */
                  placeholder="(concept, description)"
                />
              </div>
            </div>

            <div className="row">
              <label>Category: </label>
              <div className="inputCheck">
{/*               {!foundCategories ? "Wait a second..." : */}
              <select /* onChange={handleSort} */ defaultValue="">
                 <option value="" disabled>Select:</option>
{/*                   {foundCategories.map(cat => cat)} */}

                <option value="ratingAsc">Rating - 0.0 to 5.0</option>
                <option value="ratingDesc">Rating - 5.0 to 0.0</option>
                <option value="nameAsc">Name - A to Z</option>
                <option value="nameDesc"> Name - Z to A</option>
              </select>
{/*               } */}
              </div>
            </div>

            <div className="row">
              <label>Date: </label>
              <div className="separator"></div>
              <div className="inputCheck">
                <input className="date"
                  type="text" //possibly "date"
                  name="date"
/*                   value={user.birthdate}
                  onChange={handleInputChange} */
                />
              </div>
            </div>
            </div>
          <button className="bigBtn" type="submit">
            Register Transaction
          </button>
      </form>
    </div>
    )
}

