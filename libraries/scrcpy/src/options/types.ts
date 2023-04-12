import type { ReadableStream, TransformStream } from "@yume-chan/stream-extra";
import type { ValueOrPromise } from "@yume-chan/struct";

import type {
    ScrcpyBackOrScreenOnControlMessage,
    ScrcpyControlMessageType,
    ScrcpyInjectTouchControlMessage,
    ScrcpySetClipboardControlMessage,
} from "../control/index.js";

import type { ScrcpyScrollController } from "./1_16/scroll.js";
import type {
    ScrcpyAudioStreamMetadata,
    ScrcpyMediaStreamPacket,
    ScrcpyVideoStream,
} from "./codec.js";

export const DEFAULT_SERVER_PATH = "/data/local/tmp/scrcpy-server.jar";

export interface ScrcpyOptionValue {
    toOptionValue(): string | undefined;
}

export function isScrcpyOptionValue(
    value: unknown
): value is ScrcpyOptionValue {
    return (
        typeof value === "object" &&
        value !== null &&
        "toOptionValue" in value &&
        typeof value.toOptionValue === "function"
    );
}

export function toScrcpyOptionValue<T>(value: unknown, empty: T): string | T {
    if (isScrcpyOptionValue(value)) {
        value = value.toOptionValue();
    }

    // `value` may become `undefined` after `toOptionValue`
    if (value === undefined) {
        return empty;
    }

    return String(value);
}

export interface ScrcpyOptions<T extends object> {
    readonly defaults: Required<T>;

    readonly controlMessageTypes: readonly ScrcpyControlMessageType[];

    readonly value: Required<T>;

    serialize(): string[];

    setListEncoders(): void;

    setListDisplays(): void;

    parseEncoder(line: string): ScrcpyEncoder | undefined;

    /**
     * Parse the device metadata from video stream according to the current version and options.
     * @param stream The video stream.
     * @returns
     * A tuple of the video stream and the metadata.
     *
     * The returned video stream may be different from the input stream, and should be used for further processing.
     */
    parseVideoStreamMetadata(
        stream: ReadableStream<Uint8Array>
    ): ValueOrPromise<ScrcpyVideoStream>;

    parseAudioStreamMetadata(
        stream: ReadableStream<Uint8Array>
    ): ValueOrPromise<ScrcpyAudioStreamMetadata>;

    createMediaStreamTransformer(): TransformStream<
        Uint8Array,
        ScrcpyMediaStreamPacket
    >;

    serializeInjectTouchControlMessage(
        message: ScrcpyInjectTouchControlMessage
    ): Uint8Array;

    serializeBackOrScreenOnControlMessage(
        message: ScrcpyBackOrScreenOnControlMessage
    ): Uint8Array | undefined;

    serializeSetClipboardControlMessage(
        message: ScrcpySetClipboardControlMessage
    ): Uint8Array;

    createScrollController(): ScrcpyScrollController;
}

export interface ScrcpyEncoder {
    codec?: string;
    name: string;
}

export abstract class ScrcpyOptionsBase<
    T extends object,
    B extends ScrcpyOptions<object>
> implements ScrcpyOptions<T>
{
    protected _base: B;

    public abstract get defaults(): Required<T>;

    public get controlMessageTypes(): readonly ScrcpyControlMessageType[] {
        return this._base.controlMessageTypes;
    }

    public readonly value: Required<T>;

    public constructor(base: B, value: Required<T>) {
        this._base = base;
        this.value = value;
    }

    public abstract serialize(): string[];

    public setListEncoders(): void {
        this._base.setListEncoders();
    }

    public setListDisplays(): void {
        this._base.setListDisplays();
    }

    public parseEncoder(line: string): ScrcpyEncoder | undefined {
        return this._base.parseEncoder(line);
    }

    /**
     * Parse the device metadata from video stream according to the current version and options.
     * @param stream The video stream.
     * @returns
     * A tuple of the video stream and the metadata.
     *
     * The returned video stream may be different from the input stream, and should be used for further processing.
     */
    public parseVideoStreamMetadata(
        stream: ReadableStream<Uint8Array>
    ): ValueOrPromise<ScrcpyVideoStream> {
        return this._base.parseVideoStreamMetadata(stream);
    }

    public parseAudioStreamMetadata(
        stream: ReadableStream<Uint8Array>
    ): ValueOrPromise<ScrcpyAudioStreamMetadata> {
        return this._base.parseAudioStreamMetadata(stream);
    }

    public createMediaStreamTransformer(): TransformStream<
        Uint8Array,
        ScrcpyMediaStreamPacket
    > {
        return this._base.createMediaStreamTransformer();
    }

    public serializeInjectTouchControlMessage(
        message: ScrcpyInjectTouchControlMessage
    ): Uint8Array {
        return this._base.serializeInjectTouchControlMessage(message);
    }

    public serializeBackOrScreenOnControlMessage(
        message: ScrcpyBackOrScreenOnControlMessage
    ): Uint8Array | undefined {
        return this._base.serializeBackOrScreenOnControlMessage(message);
    }

    public serializeSetClipboardControlMessage(
        message: ScrcpySetClipboardControlMessage
    ): Uint8Array {
        return this._base.serializeSetClipboardControlMessage(message);
    }

    public createScrollController(): ScrcpyScrollController {
        return this._base.createScrollController();
    }
}
