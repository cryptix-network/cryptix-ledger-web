import { Image, Group } from '@mantine/core';

import styles from './header.module.css';

export default function Header(props) {
    return (
        <Group className={styles.header}>
            <div className={styles.child}>{props.children}</div>
            <div>
                <a href='https://cryptix.org' target='_blank' rel='noopener noreferrer'>
                    <Image
                        src='/cryptix-icon.ico'
                        alt='Cryptix Logo'
                        className={styles.cryptixLogo}
                        width={48}
                        height={48}
                    />
                </a>
            </div>
        </Group>
    );
}
