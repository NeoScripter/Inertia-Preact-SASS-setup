import { FC } from "preact/compat";
import css from './Home.module.scss';
import '../../../scss/app.scss';

const Home: FC<{ className?: string }> = ({ className }) => {
    return (
        <div class={css.wrapper}>
            Hello world
            <p class="test">Test</p>
        </div>
    );
};

export default Home;
