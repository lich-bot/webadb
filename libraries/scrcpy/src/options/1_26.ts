import Struct, { placeholder } from "@yume-chan/struct";

import {
    type AndroidMotionEventAction,
    type ScrcpyInjectTouchControlMessage,
} from "../control/index.js";

import { ScrcpyFloatToUint16FieldDefinition } from "./1_16/index.js";
import { type ScrcpyOptionsInit1_24 } from "./1_24.js";
import { ScrcpyOptions1_25 } from "./1_25/index.js";
import { type ScrcpyOptionValue } from "./types.js";

export const ScrcpyInjectTouchControlMessage1_26 = new Struct()
    .uint8("type")
    .uint8("action", placeholder<AndroidMotionEventAction>())
    .uint64("pointerId")
    .uint32("pointerX")
    .uint32("pointerY")
    .uint16("screenWidth")
    .uint16("screenHeight")
    .field("pressure", ScrcpyFloatToUint16FieldDefinition)
    .uint32("actionButton")
    .uint32("buttons");

export type ScrcpyInjectTouchControlMessage1_26 =
    typeof ScrcpyInjectTouchControlMessage1_26["TInit"];

export class ScrcpyUid implements ScrcpyOptionValue {
    public value: number;

    public constructor(value: number) {
        this.value = value;
    }

    public toOptionValue(): string | undefined {
        if (this.value < 0) {
            return undefined;
        }
        return this.value.toString(16);
    }
}

export interface ScrcpyOptionsInit1_26 extends ScrcpyOptionsInit1_24 {
    uid: ScrcpyUid;
}

export class ScrcpyOptions1_26<
    T extends ScrcpyOptionsInit1_26 = ScrcpyOptionsInit1_26
> extends ScrcpyOptions1_25<T> {
    public constructor(init: Partial<ScrcpyOptionsInit1_26>) {
        super(init);
    }

    public override getDefaultValue(): T {
        return Object.assign(super.getDefaultValue(), {
            uid: new ScrcpyUid(-1),
        } satisfies Omit<ScrcpyOptionsInit1_26, keyof ScrcpyOptionsInit1_24>);
    }

    public override serializeInjectTouchControlMessage(
        message: ScrcpyInjectTouchControlMessage
    ): Uint8Array {
        return ScrcpyInjectTouchControlMessage1_26.serialize(message);
    }
}
