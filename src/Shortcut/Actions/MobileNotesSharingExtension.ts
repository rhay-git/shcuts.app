import { Action } from '@/Shortcut/Action';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';

export default class MobileNotesSharingExtensionAction extends Action {
    constructor(object: any) {
        super(() => 'Create Note', object, () => ActionComponent);
    }
}
