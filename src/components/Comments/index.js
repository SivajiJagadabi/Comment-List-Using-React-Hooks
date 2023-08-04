import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import {
  CommentsList,
  CommentsContainer,
  CommentsTitle,
  Form,
  NameInput,
  CommentTextInput,
  CommentButton,
} from './styledComponents'
import CommentItem from '../CommentItem'

const Comments = () => {
  const [name, setName] = useState('')
  const [commentText, setComment] = useState('')
  const [commentsList, setCommentList] = useState([])

  const onChangeName = event => {
    setName(event.target.value)
  }

  const onChangeComment = event => {
    setComment(event.target.value)
  }

  const onSubmitComment = event => {
    event.preventDefault()
    const newComment = {
      id: uuidv4(),
      name,
      commentText,
    }

    setCommentList(prevState => [...prevState, newComment])
    setName('')
    setComment('')
  }

  return (
    <CommentsContainer>
      <CommentsTitle>Comments</CommentsTitle>
      <Form onSubmit={onSubmitComment}>
        <NameInput
          type="text"
          placeholder="Your name"
          onChange={onChangeName}
          value={name}
        />
        <CommentTextInput
          placeholder="Your comment"
          rows="6"
          onChange={onChangeComment}
          value={commentText}
        />
        <CommentButton type="submit">Comment</CommentButton>
      </Form>

      <CommentsList>
        {commentsList.map(eachComment => (
          <CommentItem commentDetails={eachComment} key={eachComment.id} />
        ))}
      </CommentsList>
    </CommentsContainer>
  )
}

export default Comments
