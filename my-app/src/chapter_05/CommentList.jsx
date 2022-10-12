import React from "react";
import Comment from "./Comment";

const comments = [
    {name:"이인제", comment: "안녕하세요", },
    {name:"유재석", comment: "재밌네요", },
    {name:"조세호", comment: "즐겁네요", },
]

function CommentList(props){
    return(
        <div>
            {comments.map((comment) => {
                return(
                    <Comment name={comment.name} comment={comment.comment}/>
                );
            })}
        </div>
    );
}

export default CommentList;