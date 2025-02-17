/*
 Copyright (c) 2022-2023 Xiamen Yaji Software Co., Ltd.

 http://www.cocos.com

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights to
 use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
 of the Software, and to permit persons to whom the Software is furnished to do so,
 subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
*/

import { HandheldInputDevice } from 'pal/input';
import { Event } from './event';
import { SystemEventTypeUnion } from '../event-enum';

/**
 * @en
 * The Handheld event.
 *
 * @zh
 * 手持设备事件。
 */
export class EventHandheld extends Event {
    /**
     * @en The handheld device which trigger the current handheld event
     * @zh 触发当前手持设备事件的手持设备
     */
    public declare handheldInputDevice: HandheldInputDevice;

    /**
     * @param eventType - The type of the event
     * @param handheldInputDevice - The handheld device which trigger the current handheld event
     */
    constructor (eventType: SystemEventTypeUnion, handheldInputDevice: HandheldInputDevice) {
        super(eventType, false);
        this.handheldInputDevice = handheldInputDevice;
    }
}
