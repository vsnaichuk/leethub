type N<T> = {
    val: number;
    next: N<T>;
    prev: N<T>;
}

class MyLinkedList {
    public length: number
    private head: undefined | N<number>
    private tail: undefined | N<number>
    
    constructor() {
        this.length = 0
        this.head = undefined
        this.tail = undefined
    }

    get(index: number): number {
        if (index < 0 || index >= this.length) {
            // throw new Error("Out of range")
            return -1
        }
        
        let curr = this.head;
        for (let i = 0; curr && i < index; ++i) {
            curr = curr.next;
        }

        return curr?.val ?? -1;
    }

    addAtHead(val: number): void {
        const node = { val } as N<number>
            
        this.length++
        if (!this.head) {
            this.head = this.tail = node
            return
        }
				
        node.next = this.head
        this.head.prev = node
        this.head = node
    }

    addAtTail(val: number): void {
        this.length++
        const node = { val } as N<number>

        if (!this.tail) {
            this.head = this.tail = node
            return;
        }

        node.prev = this.tail
        this.tail.next = node
        this.tail = node
    }

    addAtIndex(index: number, val: number): void {
        if (index > this.length) {
            // throw new Error("Out of range")
            return;
        } 
        if (index === this.length) {
            this.addAtTail(val)
            return;
        }
        if (index === 0) {
            this.addAtHead(val)
            return;
        }

        this.length++
        
        let curr = this.head
        for (let i = 0; curr && i < index; ++i) {
            curr = curr.next
        }

        if (curr) {
            const node = { val } as N<number>
            node.next = curr
            node.prev = curr.prev
            
            curr.prev.next = node //order
            curr.prev = node
        }
    }

    deleteAtIndex(index: number): void {
        if (index < 0 || index >= this.length) {
            return;
        }
        
        if (index === 0) {
            if (this.head) {
                this.head = this.head.next;
                if (this.head) {
                    this.head.prev = null;
                } else {
                    this.tail = null; // if the list is now empty
                }
            }
        } else {
            let cur = this.head;
            for (let i = 0; cur && i < index; i++) {
                cur = cur.next;
            }
            
            if (cur) {
                if (cur.prev) {
                    cur.prev.next = cur.next;
                }
                if (cur.next) {
                    cur.next.prev = cur.prev;
                }
                if (cur === this.tail) {
                    this.tail = cur.prev;
                }
            }
        }
        
        this.length--;
    }
}