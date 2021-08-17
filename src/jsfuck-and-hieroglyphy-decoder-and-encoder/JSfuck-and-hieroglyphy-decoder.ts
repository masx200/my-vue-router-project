//@ts-ignore
import { decode } from "@masx200/jsfuck-and-hieroglyphy-decoder-and-encoder";
import { defineComponent } from "vue";
export default defineComponent({
    mounted() {
        document.title = "JSfuck Decoder and hieroglyphy decoder";
    },

    methods: {
        decodehandler() {
            const setoutput = (decodedCode: string) => {
                this.outputcode = decodedCode;
            };
            try {
                setoutput(decode(this.inputcode));
            } catch (error) {
                alert("解码失败");
                throw error;
            }
        },
        runhandler() {
            new Function(this.outputcode)();
        },
    },
    data: () => {
        return {
            inputcode: "",
            outputcode: "",
        };
    },
});
