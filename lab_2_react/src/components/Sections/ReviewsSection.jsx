import { useState, useEffect } from "react";
import { Heading3 } from "../Headings";
import { Section } from "../Section";
import { Comment } from "../Comment";

const variant = 3;
const commentsUrl = `https://jsonplaceholder.typicode.com/posts/${variant}/comments`;

export function ReviewsSection() {
  const [comments, setComments] = useState(undefined);

  useEffect(() => {
    async function fetchComments() {
      try {
        const response = await fetch(commentsUrl);
        const result = await response.json();
        setComments(result);
      } catch (error) {
        console.error(error.message);
      }
    }

    fetchComments();
  }, []);

  return (
    <Section>
      <Heading3>Коментарі</Heading3>
      {comments === undefined ? (
        <p>Коментарів ще немає.</p>
      ) : (
        comments.map((comment) => (
          <Comment
            key={comment.id}
            heading={comment.name}
            subheading={comment.email}
          >
            {comment.body}
          </Comment>
        ))
      )}
    </Section>
  );
}
