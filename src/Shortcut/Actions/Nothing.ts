import { Action } from '@/Shortcut/Action';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';

export default class NothingAction extends Action {
    constructor(object: any) {
        super(() => 'Nothing', object, () => ActionComponent, () => '⚙️');
    }
}
