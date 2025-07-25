import styles from '../css/home.module.css';

const Home = () => {
    return ( 
        <div className={styles.TOTAL}>
            <p><u>Section ={">"} Sub Section</u></p>
            <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, error!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi aperiam cumque voluptate, pariatur nulla aliquid facere sunt ab ad, officia deleniti odit optio doloremque eligendi voluptatem fuga ipsa, dolor distinctio.</p>
            <div className={styles.redDiv}> </div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure fugiat alias accusamus amet minima dicta, consectetur facilis mollitia odio inventore.</p>
            <div className={styles.authorRow}>
                <div className={styles.avatarpic}></div>
                <div>
                    <p>Author Name</p>
                    <p>7 jan 2025</p>
                </div>
            </div>
            <hr/>
            <div class="paragraph">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates praesentium incidunt cumque at sint. Obcaecati fuga distinctio eum numquam natus voluptates. Doloremque fugiat amet quod deleniti ipsum rerum voluptatibus officiis sapiente sequi, eius aut ratione architecto, et delectus minima quibusdam quam asperiores. Placeat repellat totam commodi accusantium. Eaque, voluptates perferendis.</p>
            </div>
            <br />
            <hr />
            <div className={styles.ReactionBox}>
                
            </div>

            <div className={styles.MainCommentBox}>

            </div>

        </div>
    );
}
 
export default Home;