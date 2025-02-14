import styles from "../styles/AppWrapper.module.css";

export default class Header {

    static IsVisible: boolean = true;

    static _visible: string = styles.headerVisible;
    static _transparent: string = styles.headerVisibleWithTransparent;

    static _root: HTMLElement | null = null;
    static _header: HTMLElement | null = null;

    static _scrollPosition: number = 0;
    static _blocked: boolean = false;

    static setElements = (root: HTMLElement | null, header: HTMLElement | null): void => {
        if (!root) throw new Error("Root element is not found");
        if (!header) throw new Error("Header element is not found");

        this._root = root;
        this._header = header;
    }

    static block = (): void => {
        this._blocked = true;
    }

    static unBlock = (): void => {
        this._blocked = false;
    }

    static onScroll = (): void => {
        if (this._blocked) return;
        if (!this._root) throw new Error("Root element is not found");
        if (!this._header) throw new Error("Header element is not found");
        
        var currentScrollPosition = this._root.scrollTop;

        if (currentScrollPosition === 0 || this._scrollPosition === 0) {
            this.setVisibleWithTransparent();
        } else if (currentScrollPosition > this._scrollPosition) {
            this.setNoVisible();
        } else if (currentScrollPosition < this._scrollPosition) {
            this.setVisible();
        }
    
        this._scrollPosition = currentScrollPosition;
    }

    static setNoVisible = (): void => {
        if (this._blocked) return;
        if (!this._root) throw new Error("Root element is not found");
        if (!this._header) throw new Error("Header element is not found");

        if (this._header.classList.contains(this._visible)) {
            this._header.classList.remove(this._visible);
        }

        if (this._header.classList.contains(this._transparent)) {
            this._header.classList.remove(this._transparent);
        }

        this.IsVisible = false;
    }

    static setVisible = (): void => {
        if (this._blocked) return;
        if (!this._root) throw new Error("Root element is not found");
        if (!this._header) throw new Error("Header element is not found");

        if (this._header.classList.contains(this._transparent)) {
            this._header.classList.remove(this._transparent);
        }

        if (!this._header.classList.contains(this._visible)) {
            this._header.classList.add(this._visible);
        }

        this.IsVisible = true;
    }

    static setVisibleWithTransparent = (): void => {
        if (this._blocked) return;
        if (!this._root) throw new Error("Root element is not found");
        if (!this._header) throw new Error("Header element is not found");

        if (this._header.classList.contains(this._visible)) {
            this._header.classList.remove(this._visible);
        }

        if (!this._header.classList.contains(this._transparent)) {
            this._header.classList.add(this._transparent);
        }

        this.IsVisible = true;
    }

    static ensureVisible = (): void => {
        setTimeout(() => {
            if (this._blocked) return;
            if (!this._root) return;
            if (!this._header) return;
            if (this._root.scrollTop > 25) return;

            if (this._header.classList.contains(this._visible)) {
                this._header.classList.remove(this._visible);
            }
    
            if (!this._header.classList.contains(this._transparent)) {
                this._header.classList.add(this._transparent);
            }
    
            this.IsVisible = true;
        }, 250);
    }
}