import { reactive, onMounted, onUnmounted, toRefs, ToRefs } from "vue";
/**
 * 使用ResizeObserver观察一个元素的大小变化
 * 传入大小初始值
 * 返回元素的大小和函数ref
 */
export function useobservesize({
    width = 0,
    height = 0,
}: {
    width?: number;
    height?: number;
} = {}): [
    ToRefs<{
        width: number;
        height: number;
    }>,
    (e: HTMLElement | undefined) => void
] {
    onUnmounted(() => {
        observer?.disconnect();
    });
    let element: HTMLElement | undefined;
    let observer: ResizeObserver | undefined;
    onMounted(() => {
        observer = new ResizeObserver(() => {
            if (!element) {
                return;
            }
            size.width = element.clientWidth;
            size.height = element.clientHeight;
        });
    });
    const eleref = (e: HTMLElement | undefined) => {
        if (e) {
            observer?.observe(e);
            element = e;
        }
    };
    const size = reactive({
        width,
        height,
    });
    return [toRefs(size), eleref];
}
