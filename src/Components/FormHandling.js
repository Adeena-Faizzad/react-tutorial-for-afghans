import React, {useState} from 'react'

function FormHandling() {
    const [userName, setUsername] = useState('')
    const [comment, setComment] = useState('')
    const [topic, setTopic] = useState('React')

    const userNameChangeHandler = (event) => {
        setUsername(event.target.value)
    }

    const commentChangeHandler = (event) => {
        setComment(event.target.value)
    }

    const topicChangeHandler = (event) => {
        setTopic(event.target.value)
    }

    const submitHandler = (event) => {
        alert(`${userName} ${comment} ${topic}`)
        event.preventDefault()
    }

  return (
    <>
        <form onSubmit={submitHandler}>
            <div>
                <label>Username: </label>
                <input type="text" value={userName} onChange={userNameChangeHandler} />
            </div>
            <div>
                <label>Comments: </label>
                <textarea value={comment} onChange={commentChangeHandler}></textarea>
            </div>
            <div>
                <label>Topics: </label>
                <select value={topic} onChange={topicChangeHandler}>
                    <option value="react">React</option>
                    <option value="vue">Vue</option>
                    <option value="anguler">Anguler</option>
                </select>
            </div>
            <div>
                <button type='submit'>Submit</button>
            </div>
        </form>
    </>
  )
}

export default FormHandling