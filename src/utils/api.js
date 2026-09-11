class Api {
    constructor({baseUrl, headers}) {
        this._baseUrl = baseUrl;
        this._headers = headers
    }


getUserInfo () {
    return fetch(`${this._baseUrl}/users/me`, {
        method : "GET",
        headers: this._headers
    })

    .then(res => {
        if (res.ok) {
        return res.json()
        }
        return Promise.reject(res);
    })

    .catch(err => {
        console.log(err.status, err.statusText)
    })
}

getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
        method : "GET",
        headers : this._headers
    })
    .then(res => {
        if(res.ok) {
            return res.json()
        }
        return Promise.reject(res);
    })
    .catch(err => {
        console.log(err.status, err.statusText)
    })
}

getInitialData() {
    return Promise.all([this.getUserInfo(), this.getInitialCards()]);
}

profileUserEdit(formData) {
    return fetch(`${this._baseUrl}/users/me`, {
        method : "PATCH",
        headers: this._headers,
        body: JSON.stringify({
        name: formData.name, about: formData.about, avatar: formData.avatar}
       )
    })

    .then(res => {
        if (res.ok) {
        return res.json()
        }
        return Promise.reject(res);
    })
    .catch(err => {
        console.log(err.status, err.statusText)
    })
}

addNewCard (formData) {
    return fetch(`${this._baseUrl}/cards`, {
        method : "POST",
        headers : this._headers,
        body: JSON.stringify({
        name: formData.name, link: formData.link}
    )
    })
    .then(res => {
        if(res.ok) {
            return res.json()
        }
        return Promise.reject(`Err: ${res.status}`);
    })
    .catch(err => {
        console.log(err.status, err.statusText)
    })
}

addLike(cardId) {
  return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
    method: "PUT",
    headers: this._headers
    })
  
  .then(res => {
    if(res.ok) {
    return res.json()
    }
    return Promise.reject(`Err: ${res.status}`);
  })
  .catch(err => {
    console.log(err.status, err.statusText)
  })
}

removeLike(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
    method: "DELETE",
    headers: this._headers,
    })
  
  .then(res => {
    if(res.ok) {
    return res.json()
    }
    return Promise.reject(`Err: ${res.status}`);
  })
  .catch(err => {
    console.log(err.status, err.statusText)
  })
}

removeCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
    method: "DELETE",
    headers: this._headers,
    })
  
  .then(res => {
    if(res.ok) {
    return res.json()
    }
    return Promise.reject(`Err: ${res.status}`);
  })
  .catch(err => {
    console.log(err.status, err.statusText)
  })

}

updateAvatar(formData) {
     return fetch(`${this._baseUrl}/users/me/avatar`, {
        method : "PATCH",
        headers : this._headers,
        body: JSON.stringify({
        avatar: formData.avatar}
    )
    })
    .then(res => {
        if(res.ok) {
            return res.json()
        }
        return Promise.reject(`Err: ${res.status}`);
    })
    .catch(err => {
        console.log(err.status, err.statusText)
    })

}
}

export const api = new Api ({baseUrl:"https://around-api.es.tripleten-services.com/v1",
     headers: {
        authorization: "ed7aa6bc-6f43-4ac1-8bd5-1724325622e9",
        "Content-Type": "application/json"
     }
     });



