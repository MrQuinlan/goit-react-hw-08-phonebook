import { useRemoveContactMutation } from 'services/contacts-api';
import { Rings } from 'react-loader-spinner';
import s from './ListItem.module.css';

const ListItem = ({ id, name, phone }) => {
    const [removeContact, { isLoading }] = useRemoveContactMutation();

    return (
        <li className={s.item} key={id}>
            <span className={s.span}>
                {name}: {phone}
            </span>

            <button
                id={id}
                type="button"
                className={s.btn}
                onClick={() => removeContact(id)}
                disabled={isLoading}
            >
                {isLoading ? (
                    <Rings
                        height="50"
                        width="50"
                        color="yellow"
                        ariaLabel="loading"
                    />
                ) : (
                    'Delete'
                )}
            </button>
        </li>
    );
};

export default ListItem;
