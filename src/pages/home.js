import { useState } from 'react';
import styles from '../css/home.module.css';
import ReactPaginate from 'react-paginate';
const Home = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const comments = [
    { id: 1, text: "Great post!" },
    { id: 2, text: "Thanks for sharing" },
    { id: 3, text: "I disagree with this" },
    { id: 4, text: "Very informative" },
    { id: 5, text: "Where did you find this?" },
    { id: 6, text: "First comment here!" }
  ];
  const commentsPerPage = 2;
  const pageCount = Math.ceil(comments.length / commentsPerPage);
  const currentComments = comments.slice(currentPage * commentsPerPage,(currentPage + 1) * commentsPerPage);

  return (
    <div className={styles.TOTAL}>
      <p><u>Section ={">"} Sub Section</u></p>
      <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, error!</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi aperiam cumque voluptate, pariatur nulla aliquid facere sunt ab ad, officia deleniti odit optio doloremque eligendi voluptatem fuga ipsa, dolor distinctio.</p>
      <div className={styles.redDiv}></div>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure fugiat alias accusamus amet minima dicta, consectetur facilis mollitia odio inventore.</p>
      <div className={styles.authorRow}>
        <div className={styles.avatarpic}></div>
        <div>
          <p>Author Name</p>
          <p>7 jan 2025</p>
        </div>
      </div>
      <hr/>
      <div className="paragraph">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates praesentium incidunt cumque at sint. Obcaecati fuga distinctio eum numquam natus voluptates. Doloremque fugiat amet quod deleniti ipsum rerum voluptatibus officiis sapiente sequi, eius aut ratione architecto, et delectus minima quibusdam quam asperiores. Placeat repellat totam commodi accusantium. Eaque, voluptates perferendis.</p>
      </div>
      <br />
      <hr />
      <div className={styles.ReactionBox}></div>

      <div className={styles.MainCommentBox}>
        <p>{comments.length} Comments</p>
        <hr />
        <div className={styles.commentBox}>
          <p>Write your comment{"->"}</p>
        </div>
        {currentComments.map(comment => (
          <div key={comment.id} className={styles.commentBox} style={{marginTop: '5px'}}>
            <div className={styles.authorRow}>
              <div className={styles.avatarpic}></div>
              <div>
                <p className={styles.commentText}>Author Name</p>
                <p>7 Jan 2025</p>
              </div>
            </div>
            <p>{comment.text}</p>
            <p><b>Like  12   Dislike  1   Reply  Report</b></p>
          </div>
        ))}

          <ReactPaginate
            previousLabel={'Prev'}
            nextLabel={'Next'}
            pageCount={pageCount}
            onPageChange={({selected}) => setCurrentPage(selected)}
            containerClassName={styles.paginationBttns}
            pageLinkClassName={styles.paginationLink}
            previousLinkClassName={styles.paginationLink}
            nextLinkClassName={styles.paginationLink}
            activeClassName={styles.paginationActive}
            disabledClassName={styles.paginationDisabled}
          />

      </div>
    </div>
  );
};

export default Home;